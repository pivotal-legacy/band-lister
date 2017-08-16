package tokyo.beach.security;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import tokyo.beach.account.Account;

@RestController
public class LoginController {

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.CREATED)
    public Account login(@AuthenticationPrincipal AccountUserDetails userDetails) {
        return userDetails.getAccount();
    }
}
