import UserCreateDto from "../dto/UserCreateDto.js";
import UserResponseDto from "../dto/UserResponse.js";
import UserService from "../services/UserService.js";

export default class UserController {
    constructor() {
        this.userService = new UserService();

        this.createUser = this.createUser.bind(this);
    }

    async createUser(req, res) {
        try {
            const userDTO = new UserCreateDto(req.body)

            const newUser = await this.userService.createUser(userDTO);

            const responseDto = new UserResponseDto(newUser)

            res.status(201).json(responseDto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}