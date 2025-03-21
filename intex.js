export default {
    async fetch(request) {
        return new Response(`<!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>VIP 加入</title>
                <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                <script>
                    (function(){
                        emailjs.init("sbFx6huxFVrhXPqr5"); // 你的 EmailJS user_id
                    })();
                    
                    async function sendEmail(event) {
                        event.preventDefault();
                        const form = event.target;
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData.entries());

                        try {
                            const response = await emailjs.send("htcoutlook01", "t_htcoutlook01", {
                                name: data.name,
                                email: data.email,
                                message: data.message
                            });

                            alert("邮件已成功发送！感谢您的加入。");
                        } catch (error) {
                            alert("邮件发送失败：" + error.text);
                        }
                    }
                </script>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #3e2723; 
                        display: flex;
                        height: 100vh;
                        color: #e0e0e0;
                        flex-direction: column;
                    }

                    /* 顶部横幅 */
                    .header {
                        position: relative;
                        width: 100%;
                        height: 60px;
                        background: black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 20px;
                        font-weight: bold;
                        color: white;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }
                    .header span {
                        color: red; /* “测试中暂未开放” 变红色 */
                    }

                    /* Logo 图标 */
                    .logo {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 60px;
                        width: 60px;
                        object-fit: cover;
                        cursor: pointer;
                        z-index: 10;
                    }

                    /* 页面布局 */
                    .main-container {
                        display: flex;
                        flex-grow: 1;
                        width: 100%;
                    }

                    /* 左侧导航菜单 */
                    .sidebar {
                        width: 200px;
                        background: linear-gradient(45deg, #5d4037, #8d6e63);
                        padding: 20px;
                        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
                        display: flex;
                        flex-direction: column;
                    }
                    .sidebar h3 {
                        color: gold;
                        text-align: center;
                        border-bottom: 2px solid gold;
                        padding-bottom: 10px;
                    }
                    .sidebar ul {
                        list-style: none;
                        padding: 0;
                    }
                    .sidebar ul li {
                        margin: 10px 0;
                    }
                    .sidebar ul li a {
                        text-decoration: none;
                        color: #fff;
                        display: block;
                        padding: 10px;
                        background: #6d4c41;
                        border-radius: 5px;
                        text-align: center;
                        transition: 0.3s;
                    }
                    .sidebar ul li a:hover {
                        background: #8d6e63;
                    }

                    /* 主内容区域 */
                    .content {
                        flex-grow: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }
                    .container {
                        background: rgba(0, 0, 0, 0.6);
                        padding: 20px 40px;
                        border-radius: 10px;
                        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
                        text-align: center;
                        position: relative;
                    }
                    .vip-badge {
                        position: absolute;
                        top: -20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: gold;
                        color: #3e2723;
                        padding: 5px 20px;
                        border-radius: 5px;
                        font-weight: bold;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    }
                    h2 {
                        margin-bottom: 20px;
                        font-size: 2em;
                        border-bottom: 2px solid gold;
                        display: inline-block;
                        padding-bottom: 5px;
                    }
                    form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    label {
                        margin: 10px 0;
                        width: 100%;
                    }
                    input, textarea {
                        width: 100%;
                        padding: 10px;
                        margin-top: 5px;
                        border: 1px solid #5d4037;
                        border-radius: 5px;
                        background-color: #4e342e;
                        color: #e0e0e0;
                    }
                    input:focus, textarea:focus {
                        outline: none;
                        border-color: gold;
                    }
                    button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        background: linear-gradient(45deg, #8d6e63, #a1887f);
                        color: #ffffff;
                        font-size: 1em;
                        cursor: pointer;
                        transition: background 0.3s ease;
                    }
                    button:hover {
                        background: linear-gradient(45deg, #a1887f, #8d6e63);
                    }
                </style>
            </head>
            <body>

                <!-- 顶部横幅 -->
                <div class="header">
                    <a href="/">
                        <img class="logo" src="https://raw.githubusercontent.com/HTcB-12C7/htchocolate.github.io/main/DALL%C2%B7E%202025-03-12%2015.26.22%20-%20A%20highly%20realistic%20and%20detailed%20logo%20for%20'Black%20Iron%20Studio'.%20The%20design%20features%20a%20tactical%20and%20metallic%20aesthetic%20with%20a%20military%20theme.%20At%20the%20cent.webp" 
                            alt="返回主页">
                    </a>
                    黑铁工作室主页 <span>【测试中暂未开放】</span>
                </div>

                <!-- 页面主体 -->
                <div class="main-container">
                    
                    <!-- 左侧导航栏 -->
                    <div class="sidebar">
                        <h3>黑铁工作室</h3>
                        <ul>
                            <li><a href="#">黑铁 VIP</a></li>
                            <li><a href="#">关于我们</a></li>
                            <li><a href="#">联系我们</a></li>
                        </ul>
                    </div>

                    <!-- 主内容 -->
                    <div class="content">
                        <div class="container">
                            <div class="vip-badge">VIP</div>
                            <h2>加入黑铁 VIP（仅限海外）</h2>
                            <form id="vip-form" onsubmit="sendEmail(event)">
                                <label for="name">姓名:</label>
                                <input type="text" id="name" name="name" required>
                                <label for="email">邮箱:</label>
                                <input type="email" id="email" name="email" required>
                                <label for="message">留言:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                                <button type="submit">提交</button>
                            </form>
                        </div>
                    </div>

                </div>

            </body>
            </html>`, { headers: { "Content-Type": "text/html; charset=UTF-8" } });
    }
};
