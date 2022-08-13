\
import "../pages/Login.css";

export default function Login() {
    
    return(
        <div>
            <section class="signin">
                <h1>로그인</h1>
                <div class="signin__card">
                    <h2>
                        <strong>Welcome!</strong> BBtree에 오신 것을 환영합니다.
                    </h2>
                    <form>
                        <input type="text" id="userid" aria-describedby="emailHelp" placeholder="아이디를 입력하세요." />
                        <input type="password" id="userpw" placeholder="비밀번호를 입력하세요." />
                        <button class="material-symbols-outlined" >check_circle</button>
                        <span for="idRemb">아이디 저장</span>
                        <div>
                            <button class="member" onclick="login()">로그인</button>
                        </div>
                        <p>
                            * 회원이 아니면
                        </p>
                        <div>
                            <a class="member" href="register">회원 가입</a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

