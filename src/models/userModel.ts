import { RowDataPacket } from 'mysql2/promise';
export interface Usuario extends RowDataPacket {
    nombre: string;
    correo_electronico: string;
    telefono?: string;
    nombre_usuario: string;
    contrasena: string;
    rol: 'Supervisor' | 'Administrador' | 'Empleado' | 'Comprador';
    fecha_creacion: Date;
    fecha_ultimo_acceso?: Date | null;
    permisos?: Record<string, any>;
    estado: 'Activo' | 'Inactivo';
}

// Empleado model
export interface Empleado extends Usuario {
    empleado_id: number;
    admin_id?: number;
    local_id?: number;
}

// Producto model
export interface Producto extends RowDataPacket {
    producto_id: number;
    nombre: string;
    descripcion?: string;
    materiales?: string;
    precio: number;
    imagen?: string;
    publicado_por: number;
    tipo_publicador: string;
    local_id?: number;
    fecha_publicacion: Date;
}

// Local model
export interface Local extends RowDataPacket {
    local_id: number;
    nombre: string;
    direccion?: string;
    admin_id?: number;
    fecha_creacion: Date;
}

// Transaccion model
export interface Transaccion extends RowDataPacket {
    transaccion_id: number;
    comprador_id: number;
    producto_id: number;
    publicador_id: number;
    tipo_publicador: string;
    local_id?: number;
    fecha_transaccion: Date;
    cantidad: number;
    precio_total: number;
}

// InformeFinanciero model
export interface InformeFinanciero extends RowDataPacket {
    informe_id: number;
    mes: number;
    anio: number;
    media: number;
    moda: number;
    mediana: number;
    mas_vendido: number;
    ganancias: number;
    fecha_generacion: Date;
}

// Reporte model
export interface Reporte extends RowDataPacket {
    reporte_id: number;
    comprador_id: number;
    producto_id: number;
    fecha_reporte: Date;
    estado: 'Pendiente' | 'Aprobado' | 'Rechazado';
    comentario?: string;
}

// InformeGeneralSistema model
export interface InformeGeneralSistema extends RowDataPacket {
    informe_general_sistema_id: number;
    total_usuarios: number;
    moda_ubicaciones_administradores?: string;
    diez_productos_mas_vendidos: number;
    fecha_generacion: Date;
}
