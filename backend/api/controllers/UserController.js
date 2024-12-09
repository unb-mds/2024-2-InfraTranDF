import UserCreateDto from "../dto/UserCreateDto.js";
import UserResponseDto from "../dto/UserResponse.js";
import UserService from "../services/UserService.js";

export default class UserController {
    constructor() {
        this.userService = new UserService();

        this.createUser = this.createUser.bind(this);
        this.findAll = this.findAll.bind(this);
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

    async findAll(req, res) {
        try {
            const users = await this.userService.findAll();

            res.status(201).json(users.map(user => new UserResponseDto(user)));
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}