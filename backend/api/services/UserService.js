import UserRepository from '../repositories/UserRepository.js';

export default class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(userDto) {
        const { nome, email, senha } = userDto;

        if (nome == undefined || nome == '' || nome == ' ') {
            throw new Error('Nome inválido.');
        }

        if (!email || !email.includes('@')) {
            throw new Error('Email inválido.');
        }

        if (!senha || senha.length < 6) {
            throw new Error('A senha deve ter pelo menos 6 caracteres.');
        }

        // const existingUser = await this.userRepository.findByEmail(email);
        // if (existingUser) {
        //     throw new Error('O email já está cadastrado.');
        // }

        userDto.idUsuario = await this.userRepository.create(userDto);

        return userDto;
    }

    async findAll() {
        return await this.userRepository.findAll();
    }
}