package tokyo.beach.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tokyo.beach.account.Account;
import tokyo.beach.account.AccountRepo;
import tokyo.beach.account.DatabaseAccount;

import java.util.List;

@Service
public class AccountUserDetailsService implements UserDetailsService {
    private final AccountRepo accountRepo;

    public AccountUserDetailsService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        DatabaseAccount databaseAccount = accountRepo.getByUsername(username);
        Account account = new Account(databaseAccount);
        List<GrantedAuthority> valid_user = AuthorityUtils.createAuthorityList("VALID_USER");
        return new AccountUserDetails(databaseAccount.getUsername(), databaseAccount.getPassword(), valid_user, account);
    }
}
