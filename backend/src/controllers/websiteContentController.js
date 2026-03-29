const { WebsiteContent, Vehicle } = require('../models')

// Obtener todo el contenido web
exports.getAllContent = async (req, res) => {
  try {
    const contents = await WebsiteContent.findAll({
      order: [['section', 'ASC'], ['key_name', 'ASC']]
    })
    
    // Organizar por secciones
    const organized = {}
    contents.forEach(item => {
      if (!organized[item.section]) {
        organized[item.section] = {}
      }
      organized[item.section][item.key_name] = {
        value: item.value,
        type: item.value_type,
        is_active: item.is_active
      }
    })
    
    res.json(organized)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener contenido', error: error.message })
  }
}

// Obtener contenido por sección
exports.getContentBySection = async (req, res) => {
  try {
    const { section } = req.params
    const contents = await WebsiteContent.findAll({
      where: { section },
      order: [['key_name', 'ASC']]
    })
    
    const organized = {}
    contents.forEach(item => {
      organized[item.key_name] = {
        value: item.value,
        type: item.value_type,
        is_active: item.is_active
      }
    })
    
    res.json(organized)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener contenido', error: error.message })
  }
}

// Actualizar contenido (por section + key_name)
exports.updateContent = async (req, res) => {
  try {
    const { section, key_name, value, value_type, is_active } = req.body
    
    const [updated] = await WebsiteContent.update(
      { 
        value: value !== undefined ? value : undefined,
        value_type: value_type || 'text',
        is_active: is_active !== undefined ? is_active : true
      },
      { where: { section, key_name } }
    )
    
    if (!updated) {
      return res.status(404).json({ message: 'Contenido no encontrado' })
    }
    
    const content = await WebsiteContent.findOne({ where: { section, key_name } })
    res.json({ message: 'Contenido actualizado', content })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar contenido', error: error.message })
  }
}

// Actualizar múltiples contenidos de una sección
exports.updateSectionContent = async (req, res) => {
  try {
    const { section, contents } = req.body
    
    if (!contents || typeof contents !== 'object') {
      return res.status(400).json({ message: 'Se requiere un objeto con los contenidos' })
    }
    
    const updates = []
    for (const [key_name, data] of Object.entries(contents)) {
      const updateData = {}
      if (data.value !== undefined) updateData.value = data.value
      if (data.type) updateData.value_type = data.type
      if (data.is_active !== undefined) updateData.is_active = data.is_active
      
      const [updated] = await WebsiteContent.update(updateData, {
        where: { section, key_name }
      })
      if (updated) updates.push(key_name)
    }
    
    res.json({ message: 'Contenido actualizado', updated: updates })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar contenido', error: error.message })
  }
}

// Obtener vehículos destacados (para fleet)
exports.getFeaturedVehicles = async (req, res) => {
  try {
    const content = await WebsiteContent.findOne({
      where: { section: 'fleet', key_name: 'featured_vehicles' }
    })
    
    if (!content || !content.value) {
      return res.json([])
    }
    
    const vehicleIds = JSON.parse(content.value)
    const vehicles = await Vehicle.findAll({
      where: { id: vehicleIds }
    })
    
    res.json(vehicles)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener vehículos destacados', error: error.message })
  }
}

// Actualizar vehículos destacados
exports.updateFeaturedVehicles = async (req, res) => {
  try {
    const { vehicle_ids } = req.body
    
    if (!Array.isArray(vehicle_ids)) {
      return res.status(400).json({ message: 'vehicle_ids debe ser un array' })
    }
    
    await WebsiteContent.update(
      { value: JSON.stringify(vehicle_ids) },
      { where: { section: 'fleet', key_name: 'featured_vehicles' } }
    )
    
    res.json({ message: 'Vehículos destacados actualizados' })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar vehículos', error: error.message })
  }
}
