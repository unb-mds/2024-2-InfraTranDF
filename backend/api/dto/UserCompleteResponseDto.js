export default class UserCompleteResponseDto {
    constructor({ idUsuario, nome, email, eAdmin, recebeAlertas }) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.eAdmin = eAdmin;
        this.recebeAlertas = recebeAlertas;
    }
}