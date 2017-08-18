package tokyo.beach.account;

public class DatabaseAccount {
    private long id;
    private String username;
    private String password;

    DatabaseAccount(long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        DatabaseAccount that = (DatabaseAccount) o;

        if (id != that.id) return false;
        //noinspection SimplifiableIfStatement
        if (username != null ? !username.equals(that.username) : that.username != null) return false;
        return password != null ? password.equals(that.password) : that.password == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "DatabaseAccount{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
