package com.example.usersapi.features;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static com.codeborne.selenide.CollectionCondition.size;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersUIFeatureTest {

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void shouldAllowFullCrudFunctionalityForAUser() throws Exception {

        User firstUser = new User(
                "someone",
                "Ima",
                "Person"
        );

        userRepository.save(firstUser);
        Long firstUserId = firstUser.getId();

        User secondUser = new User(
                "someone_else",
                "Someone",
                "Else"
        );

        secondUser = userRepository.save(secondUser);
        Long secondUserId = secondUser.getId();


        System.setProperty("selenide.browser", "Chrome");
        open("http://localhost:3000");

        $("body").shouldHave(text("NYDataViewer Portal"));

        //test adding a user
        $("#new-user-userName").val("SonnyJim");
        $("#new-user-firstName").val("Sonny");
        $("#new-user-lastName").val("Jim");
        $("#new-user-submit").click();

        $$("[data-user-display").shouldHave(size(3));

        // test deleting a user
        $("#user-" + firstUserId).should(exist);
        $("#delete-user-" + firstUserId).click();
        $("#user-" + firstUserId).shouldNot(exist);
        $$("[data-user-display]").shouldHave(size(2));
    }

    }


}