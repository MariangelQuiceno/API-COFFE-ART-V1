
// Modelo para Supervisores, Administradores, Empleados, y Compradores (ya que comparten una estructura similar)

interface Usuario {
    nombre: string;
    correo_electronico: string;
    telefono?: string;
    nombre_usuario: string;
    contrasena: string;
    rol: 'Supervisor' | 'Administrador' | 'Empleado' | 'Comprador';
    fecha_creacion: Date;
    fecha_ultimo_acceso?: Date | null;
    permisos?: Record<string, any>; // Opcional, dependiendo de la estructura específica de permisos
    estado: 'Activo' | 'Inactivo';
}

// Modelo específico para Empleados
interface Empleado extends Usuario {
    empleado_id: number;
    admin_id?: number;
    local_id?: number;
}

// Modelo específico para Productos
interface Producto {
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

// Modelo específico para Locales
interface Local {
    local_id: number;
    nombre: string;
    direccion?: string;
    admin_id?: number;
    fecha_creacion: Date;
}

// Modelo específico para Compras y Ventas (pueden compartir una estructura similar)
interface Transaccion {
    transaccion_id: number;
    comprador_id: number;
    producto_id: number;
    publicador_id: number;
    tipo_publicador: string;
    local_id?: number; // Solo para Ventas
    fecha_transaccion: Date;
    cantidad: number;
    precio_total: number;
}

// Modelo para InformeFinanciero
interface InformeFinanciero {
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

// Modelo para Reportes
interface Reporte {
    reporte_id: number;
    comprador_id: number;
    producto_id: number;
    fecha_reporte: Date;
    estado: 'Pendiente' | 'Aprobado' | 'Rechazado';
    comentario?: string;
}

// Modelo para InformeGeneralSistema
interface InformeGeneralSistema {
    informe_general_sistema_id: number;
    total_usuarios: number;
    moda_ubicaciones_administradores?: string;
    diez_productos_mas_vendidos: number;
    fecha_generacion: Date;
}