type User = {
    username: string;
    password: string;
}

export function validateUser(user: User): boolean {
    return user.username === "admin" && user.password === "12345678";
}