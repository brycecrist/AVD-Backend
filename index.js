"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = 3000;
function isSignupPayload(payload) {
    return (payload === null || payload === void 0 ? void 0 : payload.email) !== undefined;
}
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.post("/signup", function (req, res) {
    var body = req.body;
    console.log(body);
    if (!isSignupPayload(body)) {
        res.sendStatus(422);
        return;
    }
    res.json({ token: "Generated token", email: body.email, password: body.password });
});
app.listen(port, function () {
    console.log("Backend listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map