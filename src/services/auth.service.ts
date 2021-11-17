import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {config} from '../config/config';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");

const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository) { }

  //Generacion de claves
  GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }

  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  //JWT
  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id: usuario.Id,
        correo: usuario.correo,
        nombre: usuario.nombre + " " + usuario.apellido
      }
    }, config.claveJWT)

    return token
  }

  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }

  //Autenticacion
  IdentificarPersona(correo: string, password: string) {
    try {
      let p = this.usuarioRepository.findOne({where: {correo: correo, password: password}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }


}
