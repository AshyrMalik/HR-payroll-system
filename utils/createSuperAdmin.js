const User = require('../models/User');

const createSuperAdmin = async () => {
  try {
    const adminData = {
      name: 'Super Admin',
      email: 'admin@ex.com',
      password: 'admin123',
      is_admin: 1
    };

    // Check if admin exists
    //const existingAdmin = await User.findOne({ email: adminData.email });
    
    // if (existingAdmin) {
    //   console.log('Super Admin already exists');
    //   return;
    // }

    // Create and save admin
    const newAdmin = new User(adminData);
    await newAdmin.save();
    
    console.log('Super Admin created successfully');
    console.log('Email:', adminData.email);
    console.log('Password:', adminData.password);

  } catch (error) {
    console.error('Error creating Super Admin:', error);
  }
};

module.exports = { createSuperAdmin };