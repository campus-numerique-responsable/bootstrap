package fr.numresponsable.bootstrapjava.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    Logger logger = LoggerFactory.getLogger(PingController.class);


    @GetMapping("/ping")
    public String ping() {
        String username = System.getenv("LOGIN_API_RTE");
        String password = System.getenv("PASSWORD_API_RTE");
        logger.info("username " + username + ", password " + password);
        return "Pong";
    }
}
