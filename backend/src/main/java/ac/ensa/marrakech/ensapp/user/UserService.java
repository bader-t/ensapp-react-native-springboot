package ac.ensa.marrakech.ensapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }


    public void addUser(User user) {
        System.out.println(user);
        Optional<User> userCheck = userRepository.findUserByEmail(user.getEmail());

        if (userCheck.isPresent()){
            throw new IllegalStateException("email taken!");
        }
        userRepository.save(user);
    }

    public void deleteUser(long userId) {
        if(!userRepository.existsById(userId)){
            throw new IllegalStateException("user with id="+userId+" does not exist!");
        }
        userRepository.deleteById(userId);
    }
}
