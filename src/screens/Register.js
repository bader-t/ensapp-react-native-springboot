import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';
import axios from 'axios';
import Home from './Home';
import BASE_URL from '../../config/Config';


const api = axios.create(BASE_URL)



const Register = () => {
    const [form, setForm] = useState({});
    const { navigate } = useNavigation();
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        await api.get('/')
            .then((reponse) => {
                console.log(reponse); const myusers = reponse.data;
                setUsers(myusers);
            })
            .catch((error) => {
                console.log(error);
                showMessage({
                    message: "Something went wrong!",
                    description: "Please verify the base url of the backend!",
                    type: "danger",
                });
            }

            );
    };
    useEffect(() => getUsers(), []);
    // handel inputs
    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        if (value !== '') {
            if (name === 'email') {
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                let flag = false;
                users.map((user) => {
                    if (user.email === value) {
                        flag = true;
                    }
                })
                if (emailRegex.test(value)) {
                    if (flag) {
                        setErrors((prev) => {
                            return { ...prev, [name]: 'This email is already taken' };
                        });
                    }
                    else {
                        setErrors((prev) => {
                            return { ...prev, [name]: null };
                        });
                    }
                }
                else {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'Please add a valid email adress' };
                    });
                }
            }
            else if (name === 'birthdate') {
                const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

                if (birthdateRegex.test(value)) {

                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
                else {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'Please add a valid date YYYY-MM-DD' };
                    });
                }
            }
            else if (name === 'phone') {
                const phoneRegex = /^\d{9}[0-9]$/;

                if (phoneRegex.test(value)) {

                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
                else {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'Please add a valid phone number (10 digits)' };
                    });
                }
            }
            else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            };

        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is required' };
            });
        }
    };

    // submit
    const onSubmit = () => {
        if (!form.firstname) {
            setErrors((prev) => {
                return { ...prev, firstname: 'Please add a first name' };
            });
        }
        if (!form.lastname) {
            setErrors((prev) => {
                return { ...prev, lastname: 'Please add a last name' };
            });
        }
        if (!form.birthdate) {
            setErrors((prev) => {
                return { ...prev, birthdate: 'Please add a birth date' };
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: 'Please add an email' };
            });
        }
        if (!form.phone) {
            setErrors((prev) => {
                return { ...prev, phone: 'Please add a phone number' };
            });
        }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {
            api.post('/', form)
                .then(() => {
                    showMessage({
                        message: "User added successfully!",
                        description: "You are being redirected to the Home page",
                        type: "success",
                    });
                    setTimeout(() => {

                        navigate(Home);
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error);
                    showMessage({
                        message: "Something went wrong!",
                        type: "danger",
                    });
                });


        }
    };


    return (
        <Container>
            <FlashMessage position="bottom"></FlashMessage>
            <Input
                label="Firstname"
                placeholder="Enter your firstname"
                onChangeText={(value) => {
                    onChange({ name: 'firstname', value });
                }}
                error={errors.firstname}
            />

            <Input
                label="Lastname"
                placeholder="Enter your lastname"
                onChangeText={(value) => {
                    onChange({ name: 'lastname', value });
                }}
                error={errors.lastname}
            />

            <Input
                label="Birth date"
                placeholder="YYYY-MM-DD"
                onChangeText={(value) => {
                    onChange({ name: 'birthdate', value });
                }}
                error={errors.birthdate}
            />

            <Input
                label="Email"
                placeholder="example@email.com"
                onChangeText={(value) => {
                    onChange({ name: 'email', value });
                }}
                error={errors.email}
            />

            <Input
                label="Phone"
                placeholder="0601010101"
                onChangeText={(value) => {
                    onChange({ name: 'phone', value });
                }}
                error={errors.phone}
            />

            <Button title="Submit" onPress={onSubmit}></Button>

        </Container>
    );
}

export default Register;