import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  usuario = {
    nombre: 'Mariano López',
    email: 'mariano@email.com',
    telefono: '222-123-4567',
    edad: 30,
    direccion: 'Puebla, México'
  };

  errors = {
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    direccion: ''
  };

  previewUrl: string | ArrayBuffer | null = null;

  guardarUsuario() {
    this.errors = { nombre: '', email: '', telefono: '', edad: '', direccion: '' };

    if (!this.usuario.nombre) this.errors.nombre = 'El nombre es obligatorio.';
    if (!this.usuario.email) this.errors.email = 'El correo es obligatorio.';
    if (!this.usuario.telefono) this.errors.telefono = 'El teléfono es obligatorio.';
    if (!this.usuario.edad) this.errors.edad = 'La edad es obligatoria.';
    if (!this.usuario.direccion) this.errors.direccion = 'La dirección es obligatoria.';

    if (Object.values(this.errors).every(err => err === '')) {
      console.log('Datos guardados:', this.usuario);
    }
  }

  cambiarFoto(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
