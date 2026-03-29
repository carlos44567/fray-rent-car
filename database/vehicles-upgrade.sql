-- Script para actualizar la tabla vehicles con nuevos campos
-- Ejecutar este script para añadir las nuevas funcionalidades de vehículos

USE fray_rent_car;

-- Verificar si existen las columnas y añadirlas si no existen
-- NOTA: MySQL no tiene ALTER TABLE ADD COLUMN IF NOT EXISTS, 
-- por lo que usamos un procedimiento o verificamos manualmente

-- Añadir columna category si no existe
-- ALTER TABLE vehicles ADD COLUMN category ENUM('economico', 'suv', 'premium', 'luxury') DEFAULT 'economico' AFTER status;

-- Añadir columna is_active si no existe
-- ALTER TABLE vehicles ADD COLUMN is_active BOOLEAN DEFAULT TRUE AFTER description;

-- Añadir columna is_featured si no existe
-- ALTER TABLE vehicles ADD COLUMN is_featured BOOLEAN DEFAULT FALSE AFTER is_active;

-- Añadir columna sort_order si no existe
-- ALTER TABLE vehicles ADD COLUMN sort_order INT UNSIGNED DEFAULT 0 AFTER is_featured;

-- Alternativamente, recrear la tabla con todos los campos:
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(80) NOT NULL,
  model VARCHAR(120) NOT NULL,
  year INT UNSIGNED NOT NULL,
  price_per_day DECIMAL(10,2) NOT NULL,
  status ENUM('available', 'reserved', 'maintenance') NOT NULL DEFAULT 'available',
  category ENUM('economico', 'suv', 'premium', 'luxury') DEFAULT 'economico',
  image_url VARCHAR(500) NULL,
  description TEXT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INT UNSIGNED DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar vehículos de ejemplo (con is_active=true para que aparezcan en web)
INSERT INTO vehicles (brand, model, year, price_per_day, category, image_url, is_active, is_featured, sort_order) VALUES
('Kia', 'Picanto', 2024, 35.00, 'economico', '/images/vehicles/car-1.jpg', true, true, 1),
('Hyundai', 'Tucson', 2024, 65.00, 'suv', '/images/vehicles/car-2.jpg', true, true, 2),
('Toyota', 'Corolla', 2024, 50.00, 'economico', '/images/vehicles/car-3.jpg', true, true, 3),
('BMW', 'X5', 2024, 120.00, 'luxury', NULL, true, false, 4),
('Mercedes', 'C-Class', 2024, 95.00, 'premium', NULL, true, false, 5),
('Audi', 'A4', 2024, 85.00, 'premium', NULL, false, false, 6);

-- Verificar estructura
DESCRIBE vehicles;

-- Ver datos
SELECT id, brand, model, price_per_day, category, is_active, is_featured, sort_order FROM vehicles;
