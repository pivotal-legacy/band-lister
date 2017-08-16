package tokyo.beach.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import tokyo.beach.account.Account;

import java.util.Collection;

class AccountUserDetails extends User {
    private final Account account;

    AccountUserDetails(
            String username,
            String password,
            Collection<? extends GrantedAuthority> authorities,
            Account account
    ) {
        super(username, password, authorities);
        this.account = account;
    }


    Account getAccount() {
        return account;
    }
}
