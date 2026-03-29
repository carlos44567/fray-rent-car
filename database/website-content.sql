-- Tabla para contenido editable de la web pública
-- Ejecutar este script para añadir el módulo de gestión de contenido

USE fray_rent_car;

-- Tabla principal de contenido web
CREATE TABLE IF NOT EXISTS website_content (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  section VARCHAR(50) NOT NULL,           -- 'home', 'hero', 'booking', 'fleet', 'trust', 'footer'
  key_name VARCHAR(100) NOT NULL,         -- nombre del campo específico
  value TEXT,                              -- valor del contenido
  value_type ENUM('text', 'number', 'boolean', 'json') DEFAULT 'text',
  is_active BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_section_key (section, key_name)
);

-- Insertar contenido inicial (valores por defecto para FRAY RENT CAR)
INSERT INTO website_content (section, key_name, value, value_type) VALUES
-- HOME
('home', 'company_name', 'FRAY RENT CAR', 'text'),
('home', 'company_subtitle', 'Alquiler de vehículos premium', 'text'),
('home', 'fleet_title', 'NUESTRA FLOTA', 'text'),
('home', 'trust_title', 'SERVICIO DE CONFIANZA', 'text'),

-- HERO
('hero', 'title_line1', 'FRAY', 'text'),
('hero', 'title_line2', 'RENT CAR', 'text'),
('hero', 'subtitle', 'Alquiler de vehículos premium', 'text'),
('hero', 'button_primary', 'Reservar Coche', 'text'),
('hero', 'button_secondary', 'Ver Flota', 'text'),

-- BOOKING
('booking', 'price_from', '35', 'number'),
('booking', 'button_text', 'Reservar', 'text'),
('booking', 'label_pickup', 'Recogida', 'text'),
('booking', 'label_return', 'Devolución', 'text'),
('booking', 'label_from', 'Desde', 'text'),
('booking', 'label_to', 'Hasta', 'text'),
('booking', 'label_category', 'Categoría', 'text'),

-- FLEET - vehiculos destacados (JSON array)
('fleet', 'featured_vehicles', '[1, 2, 3]', 'json'),

-- TRUST SERVICES
('trust', 'item1_title', 'Seguro Incluido', 'text'),
('trust', 'item1_description', 'Cobertura completa en todos nuestros vehículos', 'text'),
('trust', 'item1_icon', 'shield', 'text'),
('trust', 'item1_active', 'true', 'boolean'),
('trust', 'item2_title', 'Entrega en Aeropuerto', 'text'),
('trust', 'item2_description', 'Entrega y recogida en principales aeropuertos', 'text'),
('trust', 'item2_icon', 'plane', 'text'),
('trust', 'item2_active', 'true', 'boolean'),

-- FOOTER
('footer', 'phone', '+34 900 123 456', 'text'),
('footer', 'email', 'info@frayrentcar.com', 'text'),
('footer', 'address', 'Madrid, España', 'text'),
('footer', 'copyright', '© 2026 FRAY RENT CAR. Todos los derechos reservados.', 'text');

-- Verificar inserción
SELECT * FROM website_content;
