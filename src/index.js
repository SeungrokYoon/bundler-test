import { createRoot } from "react-dom/client";
import App from "./App";

// 기존 Body에 있는 내용을 지움
document.body.innerHTML = '<div id="app"></div>';

// 새로운 루트를 생성
const root = createRoot(document.getElementById("app"));
root.render(<App />);
