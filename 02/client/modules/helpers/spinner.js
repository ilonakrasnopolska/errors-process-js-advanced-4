export function showSpinner () {
  // show loading spinner
  const loadingSpinner = document.getElementById('loading-spinner')
  loadingSpinner.classList.add('d-flex', 'justify-content-center')
  loadingSpinner.style.display = 'flex'
  return loadingSpinner
}

export function hideSpinner () {
  const loadingSpinner = document.getElementById('loading-spinner')
  if (loadingSpinner) {
    // Hide the loading spinner
    loadingSpinner.classList.remove('d-flex', 'justify-content-center')
    loadingSpinner.style.display = 'none'
    return loadingSpinner
  }
}
