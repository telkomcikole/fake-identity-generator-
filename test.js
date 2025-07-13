const http = require('http');

// Function to validate the response
function validateResponse(data) {
  const required = [
    'name', 'gender', 'age', 'address', 'city', 'district',
    'village', 'province', 'postalCode', 'email', 'phone',
    'occupation', 'company'
  ];

  // Check if all required fields exist
  const hasAllFields = required.every(field => data.hasOwnProperty(field));
  
  // Basic validation
  const isValid = 
    hasAllFields &&
    data.age >= 18 && data.age <= 77 &&
    data.phone.startsWith('+62 ') &&
    data.email.includes('@') &&
    ['Laki-laki', 'Perempuan'].includes(data.gender);

  return isValid;
}

// Make a test request
http.get('http://localhost:3000/generate', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    try {
      const identity = JSON.parse(data);
      const isValid = validateResponse(identity);
      
      console.log('Response received:', identity);
      console.log('\nValidation result:', isValid ? 'PASSED ✅' : 'FAILED ❌');
      
      if (!isValid) {
        console.log('\nValidation errors:');
        if (!identity.age || identity.age < 18 || identity.age > 77) {
          console.log('- Invalid age');
        }
        if (!identity.phone.startsWith('+62 ')) {
          console.log('- Invalid phone format');
        }
        if (!identity.email.includes('@')) {
          console.log('- Invalid email format');
        }
        if (!['Laki-laki', 'Perempuan'].includes(identity.gender)) {
          console.log('- Invalid gender');
        }
      }
    } catch (error) {
      console.error('Error parsing response:', error.message);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});