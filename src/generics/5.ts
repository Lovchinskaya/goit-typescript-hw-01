export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  // Замініть наступний код на версію за допомогою Record
  type RoleDescription = Record<UserRole, string>
  
  const RoleDescription = {
    [UserRole.admin]: 'User',
    [UserRole.editor]: 'User',
    [UserRole.guest]: 'User',
  };

  console.log(RoleDescription);