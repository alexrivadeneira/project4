package com.example.usersapi;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	private UserRepository userRepository;
	private MockMvc mockMvc;

	@Before
	public void setUp(){
		userRepository.deleteAll();
	}



	@Test
	public void shouldAllowFullCrudForAUser() throws Exception{
		User firstUser = new User(
				"someone",
				"Ima",
				"Person"
		);

		User secondUser = new User(
				"someone_else",
				"Someone",
				"Else"
		);

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});

		when()
				.get("http://localhost:8080/users")
				.then()
				.statusCode(is(200))
				.and().body(containsString("someone"))
				.and().body(containsString("Else"));


		// Test creating a User
		User userNotYetInDb = new User(
				"new_user",
				"Not",
				"Yet Created"
		);

		given()
				.contentType(JSON)
				.and().body(userNotYetInDb)
				.when()
				.post("http://localhost:8080/users")
				.then()
				.statusCode(is(200))
				.and().body(containsString("new_user"));

// Test get all Users
		when()
				.get("http://localhost:8080/users/")
				.then()
				.statusCode(is(200))
				.and().body(containsString("someone"))
				.and().body(containsString("Else"))
				.and().body(containsString("Yet Created"));

// Test finding one user by ID
		when()
				.get("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200))
				.and().body(containsString("Someone"))
				.and().body(containsString("Else"));

// Test updating a user
		secondUser.setFirstName("changed_name");

		given()
				.contentType(JSON)
				.and().body(secondUser)
				.when()
				.patch("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200))
				.and().body(containsString("changed_name"));

// Test deleting a user
		when()
				.delete("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200));
	}



	@After
	public void tearDown(){
		userRepository.deleteAll();
	}

}
