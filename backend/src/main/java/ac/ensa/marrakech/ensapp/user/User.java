package ac.ensa.marrakech.ensapp.user;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String firstname;
    private String lastname;
    private LocalDate birthdate;
    @Column(unique = true)
    private String email;
    private long phone;

    public User() {
    }

// Constructors
    public User(
                long id,
                String firstname,
                String lastname,
                LocalDate birthdate,
                String email,
                long phone
                ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
    }

    public User(
                String firstname,
                String lastname,
                LocalDate birthdate,
                String email,
                long phone
                ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
    }

// Getters
    public long getId() {
        return id;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public String getEmail() {
        return email;
    }

    public long getPhone() {
        return phone;
    }


// Setters
    public void setId(long id) {
        this.id = id;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", birthdate=" + birthdate +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
