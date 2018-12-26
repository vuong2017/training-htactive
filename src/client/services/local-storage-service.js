const storageKeys = {
  ADMIN_TOKEN: 'ADMIN_TOKEN',
  USER_ID: 'USER_ID',
  ROLE_ID: 'ROLE_ID'
}
/**ADMIN_TOKEN */
const getCurrentUserToken = async () => await localStorage.getItem(storageKeys.ADMIN_TOKEN)
const setCurrentUserToken = async (token) => await localStorage.setItem(storageKeys.ADMIN_TOKEN, token || '')
const clearUserToken = async () => await localStorage.removeItem(storageKeys.ADMIN_TOKEN)
/**USER_ID */
const getCurrentUserId = async () => await localStorage.getItem(storageKeys.USER_ID)
const setCurrentUserId = async (user_id) => await localStorage.setItem(storageKeys.USER_ID, user_id || '')
const clearUserId = async () => await localStorage.removeItem(storageKeys.USER_ID)
/**ROLE_ID */
const getRoleID = async () => await localStorage.getItem(storageKeys.ROLE_ID)
const setRoleID = async (role_id) => await localStorage.setItem(storageKeys.ROLE_ID, role_id || '')
const clearRoleID = async () => await localStorage.removeItem(storageKeys.ROLE_ID)

export {
  /**ADMIN_TOKEN */
  getCurrentUserToken,
  setCurrentUserToken,
  clearUserToken,
  /**USER_ID */
  clearUserId,
  getCurrentUserId,
  setCurrentUserId,
  /**ROLE_ID */
  getRoleID,
  setRoleID,
  clearRoleID
}