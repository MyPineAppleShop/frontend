import "./SignUp.css";

export default function Login() {
    
    return(
        <div>
        <section class="signin">
            <h1>회원가입</h1>
            <div class="signin__card">
                <h2>
                    <strong>BBtree</strong> 
                </h2>
                <div>
                    <input type="text" id="userid" placeholder="아이디를 입력하세요." />
                    <p>
                        * 아이디는 1-15자의 영문과 숫자와 일부특수문자(._-)만 입력 가능합니다.
                    </p>
                    <input type="password" id="userpw" placeholder="비밀번호를 입력하세요." />
                    <input type="password" id="input-password2" placeholder="비밀번호를 재 입력하세요." />
                    <p>
                        * 영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요.<br/>특수문자(!@#$%^&*)도 사용 가능합니다.
                    </p>
                    <input type="text" id="usernick" placeholder="닉네임을 입력하세요." />

                   
                    <button class="member" onclick="register()">회원가입</button>
                    <a class="member 2"  href="/login">취소</a>
                </div>
            </div>
        </section>
    </div>
    );
}
