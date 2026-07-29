import users from '../data/users.json'

export const authenticateUser = async (email, password) => {
  const user = users.find(
    item => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password
  )

  if (!user) {
    throw new Error('Invalid email or password')
  }

  const { password: _, ...safeUser } = user
  return safeUser
}
