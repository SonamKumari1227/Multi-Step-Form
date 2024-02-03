import React, { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <h2>Step 1: Personal details</h2>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Step 2: Contact Information</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {currentStep === 3 && (
  <div>
    <h2>Step 3: Address</h2>
    
    {/* Address Fields */}
    <label>
      Street :
      <input
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
      />
    </label>
    <br />
    
    <label>
      City:
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
    </label>
    <br />
    
    <label>
      State:
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
      />
    </label>
    <br />
    
    <label>
      Zip Code:
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
      />
    </label>
    <br />

    {/* Buttons for Navigation */}
    <button type="button" onClick={prevStep}>
      Previous
    </button>
    <button type="button" onClick={nextStep}>
      Next
    </button>
  </div>
)}

              {currentStep === 4 && (
  <div>
  <h2>Step 4: Payment Details</h2>
<label>
  First Name:
  <p style={{ color: 'dark green', display: 'inline', marginLeft: '0px' }}>
    {formData.firstName}
  </p>
</label>
<label>
  Last Name:
  <p style={{ color: 'dark green', display: 'inline', marginLeft: '0px' }}>
    {formData.lastName}
  </p>
</label>
<label>
  Email:
  <p style={{ color: 'dark green', display: 'inline', marginLeft: '0px' }}>
    {formData.email}
  </p>
</label>
<label>
  Phone:
  <p style={{ color: 'dark green', display: 'inline', marginLeft: '0px' }}>
    {formData.phone}
  </p>
</label>


    {/* New Payment Fields */}
    <label>
      Card Number:
      <input
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Expiry Date:
      <input
        type="text"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      CVV:
      <input
        type="text"
        name="cvv"
        value={formData.cvv}
        onChange={handleInputChange}
      />
    </label>
    <br />

    {/* Buttons for Navigation */}
    <button type="button" onClick={prevStep}>
      Previous
    </button>
    <button type="button" onClick={nextStep}>nextStep</button>
  </div>
)}

        
{currentStep === 5 && (
  <div>
    <h2>Step 5: Review and Submit</h2>
    <p >First Name: {formData.firstName}</p>
    <p>Last Name: {formData.lastName}</p>
    <p>Email: {formData.email}</p>
    <p>Phone: {formData.phone}</p>

    {/* New Review Text Area */}
    <label>
      Review:
      <textarea
        name="review"
        value={formData.review}
        onChange={handleInputChange}
      />
    </label>
    <br />

    {/* Buttons for Navigation */}
    <button type="button" onClick={prevStep}>
      Previous
    </button>
    <button type="submit">Submit</button>
  </div>
)}

      </form>
    </div>
  );
};

export default MultiStepForm;
