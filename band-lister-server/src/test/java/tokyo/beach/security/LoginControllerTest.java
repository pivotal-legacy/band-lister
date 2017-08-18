package tokyo.beach.security;

import org.junit.Before;
import org.junit.Test;
import org.springframework.core.MethodParameter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import tokyo.beach.account.Account;

import java.util.Collections;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

public class LoginControllerTest {
    private MockMvc mockController;

    @Before
    public void setUp() throws Exception {
        LoginController loginController = new LoginController();
        Account fakeAccount = new Account("test user");
        mockController = standaloneSetup(loginController)
                .setCustomArgumentResolvers(getAccountUserDetailsResolver(fakeAccount))
                .build();
    }

    @Test
    public void test_login_returnsAccount() throws Exception {
        mockController.perform(post("/login"))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.username", equalTo("test user")));
    }

    private HandlerMethodArgumentResolver getAccountUserDetailsResolver(Account account) {
        AccountUserDetails accountUserDetails = new AccountUserDetails(
                account.getUsername(),
                "encrypted test password",
                Collections.emptyList(),
                account
        );

        return new HandlerMethodArgumentResolver() {
            @Override
            public boolean supportsParameter(MethodParameter parameter) {
                return parameter.getParameterType().isAssignableFrom(AccountUserDetails.class);
            }

            @Override
            public Object resolveArgument(
                    MethodParameter parameter,
                    ModelAndViewContainer mavContainer,
                    NativeWebRequest webRequest,
                    WebDataBinderFactory binderFactory
            ) throws Exception {
                return accountUserDetails;
            }
        };
    }
}



