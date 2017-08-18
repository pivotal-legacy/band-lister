package tokyo.beach.account;

import java.io.Serializable;

public class Account implements Serializable {
    private String username;

    public Account(String username) {
        this.username = username;
    }

    public Account(DatabaseAccount databaseAccount) {
        this.username = databaseAccount.getUsername();
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Account account = (Account) o;

        return username != null ? username.equals(account.username) : account.username == null;
    }

    @Override
    public int hashCode() {
        return username != null ? username.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Account{" +
                "username='" + username + '\'' +
                '}';
    }
}
