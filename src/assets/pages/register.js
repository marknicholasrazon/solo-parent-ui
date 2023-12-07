import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../img/banner.png';
import Navbar from '../pages/navbar';
import Wave from '../img/wave.png';
import Wavy from '../img/wavy.svg';
import Footer from '../pages/footer';

function Register() {
  useEffect(() => {
    document.title = "Register - Solo Parent's Application System";
    window.scrollTo(0, 0);
  }, []);

  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  return (
    <>
    <div className="banner-page">
      <Navbar/>
      <img src={Banner} className="banner-img" alt="banner-img"/>
      <div className="banner-context">
          <p>home/register</p>
          <h2>Hi <img src={Wave} alt='wave'/>, let's get familiar</h2>
      </div>
    </div>
    <div className='container register-section'>
      <div className='left'>
        <div className='basic-information'>
          <details open>
            <summary>I. Basic Information</summary>
            <form method='post' action enctype='multipart/form-data'>
              <div id='form-status'></div>
              <label>
                Name
                <div className='form-grid-2 mt'>
                  <input type='text' placeholder='Surname' required name='surname' id='surname' autofocus=''/>
                  <input type='text' placeholder='Given name' required name='givenName' id='givenName'/>
                  <input type='text' placeholder='Middle name' required name='middleName' id='middleName'/>
                  <input type='text' placeholder='Ext. Jr, Sr.' required name='ext' id='ext'/>
                </div>
              </label>
              <label for='civilStatus'>
                Civil Status
                <div className='form-grid-2 mt'>
                  <div className='radio-item'>
                    <input type='checkbox' name='civilStatus' id='single' value='Single'/>
                    <p>Single</p>
                  </div>
                  <div className='radio-item'>
                    <input type='checkbox' name='civilStatus' id='annulled' value='Annulled'/>
                    <p>Annulled</p>
                  </div>
                  <div className='radio-item'>
                    <input type='checkbox' name='civilStatus' id='separated' value='Separated'/>
                    <p>Separated</p>
                  </div>
                  <div className='radio-item'>
                    <input type='checkbox' name='civilStatus' id='widowed' value='Widowed'/>
                    <p>Widow/Widowed</p>
                  </div>
                </div>
              </label>
              <div className='form-grid-2'>
                <label for='sex'>
                  Sex
                  <select placeholder='Gender' id="gender" name="gender" required className='mt-s'>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
                <label for='age'>
                  age (to follow)
                </label>
                <label for='date-of-birth'>
                  Date of Birth
                  <input type='date' id='birthDate' name='birthdate' className='mt-i'/>
                </label>
                <label for='place-of-birth'>
                  Place of Birth
                  <input type='text' placeholder='Ex: Laguna, Philippines' id='placeOfBirth' name='birthdate' className='mt-i'/>
                </label>
                <label for='religion'>
                  Religion
                  <input type='text' placeholder='Ex: Roman Catholic' id='religion' name='religion' className='mt-i'/>
                </label>
                <label for='educational-attainment'>
                  Educational Attainment
                  <select id="educationAttainment" name="educationAttainment" required className='mt-s'>
                    <option value=''>Select Educational Attainment</option>
                    <option value='No Formal Education'>No Formal Education</option>
                    <option value='Elementary School'>Elementary School</option>
                    <option value='High School'>High School</option>
                    <option value='Vocational/Technical School'>Vocational/Technical School</option>
                    <option value='College (Undergraduate)'>College (Undergraduate)</option>
                    <option value='College (Graduate)'>College (Graduate)</option>
                    <option value='Postgraduate'>Postgraduate</option>
                    <option value='Other'>Other</option>
                  </select>
                </label>
              </div>
              <label for='present-address' className='form-grid-1'>
                Present
                <textarea rows='3' placeholder='Enter the address...' id='presentAddress' name='presentAddress' required className='mt-i'></textarea>
              </label>
              <div className='form-grid-2'>
                <label for='mobile-no'>
                  Mobile No.
                  <input type='number' placeholder='Ex: +639123456789' id='mobileNo' name='mobileNo' className='mt-i'/>
                </label>
                <label for='landline-no'>
                  Landline No.
                  <input type='number' placeholder='Ex: 1234-5678' id='landlineNo' name='landlineNo' className='mt-i'/>
                </label>
                <label for='profession'>
                  Profession
                  <input type='text' placeholder='Ex: Writer' id='profession' name='profession' className='mt-i'/>
                </label>
                <label for='occupation'>
                  Occupation
                  <input type='text' placeholder='Ex: Journalist' id='occupation' name='occupation' className='mt-i'/>
                </label>
                <label for='monhtly-income'>
                  Monthly Income
                  <input type='number' placeholder='Ex: 15,000' id='monthlyIncome' name='monthlyIncome' className='mt-i'/>
                </label>
                <label for='employer-name'>
                  Name of Employer
                  <input type='text' placeholder='Ex: John Doe' id='employerName' name='employerName' className='mt-i'/>
                </label>
              </div>
              <label for='employer-address' className='form-grid-1'>
                Employer/Company Address
                <textarea rows='3' placeholder='Enter the address...' id='employerAddress' name='employerAddress' required className='mt-i'></textarea>
              </label>
              <label for='contact-no' className='form-grid-1'>
                Contact No.
                <input type='number' placeholder='Ex: +639123456789' id='contactNo' name='contactNo' className='mt-i'/>
              </label>
              <div className='form-grid-2'>
                <label for='emergency-contact'>
                  Contact person in case of Emergency
                  <input type='text' placeholder='Ex: John Doe' id='emergencyContact' name='emergencyContact' className='mt-i'/>
                </label>
                <label for='contact-no'>
                  Contact No.
                  <input type='number' placeholder='Ex: +639123456789' id='contactNo' name='contactNo' className='mt-i'/>
                </label>
              </div>
              <button type='submit'>Save</button>
            </form>
          </details>
        </div>
        <div className='family-composition'>
          <details>
            <summary>II. Family Composition</summary>
            <form method='post' action enctype='multipart/form-data'>
              <div id='form-status'></div>
              <div className='form-table'>
                <table>
                  <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Relationship</th>
                    <th>Status</th>
                    <th>Educational Attainment</th>
                    <th>Occupation</th>
                    <th>Monthly Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.id}>
                        <td>
                          <input type='text' name={`name`} id={`name${row.id}`} required/>
                        </td>
                        <td>
                          <input type='number' name={`age`} id={`age${row.id}`} required/>
                        </td>
                        <td>
                          <select name={`sex`} required>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </td>
                        <td>
                          <input type='text' name={`relationship`} id={`relationship${row.id}`} required/>
                        </td>
                        <td>
                          <input type='text' name={`status`} id={`status${row.id}`} required/>
                        </td>
                        <td>
                          <select id={`educationAttainment${row.id}`} name={`educationAttainment`} required>
                            <option value=''>Select Educational Attainment</option>
                            <option value='No Formal Education'>No Formal Education</option>
                            <option value='Elementary School'>Elementary School</option>
                            <option value='High School'>High School</option>
                            <option value='Vocational/Technical School'>Vocational/Technical School</option>
                            <option value='College (Undergraduate)'>College (Undergraduate)</option>
                            <option value='College (Graduate)'>College (Graduate)</option>
                            <option value='Postgraduate'>Postgraduate</option>
                            <option value='Other'>Other</option>
                          </select>
                        </td>
                        <td>
                          <input type='text' name={`occupation`} id={`occupation${row.id}`} required/>
                        </td>
                        <td>
                          <input type='text' name={`income`} id={`income${row.id}`} required/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='add-row'>
                <a onClick={addRow}>Add row</a>
              </div>
              <button type='submit'>Save</button>
            </form>
          </details>
        </div>
        <div className='reasons-circumstances'>
          <details>
            <summary>III. Reasons/Circumstances of being a Solo Parent</summary>
            <form method='post' action enctype='multipart/form-data'>
              <div id='form-status'></div>
              <label for='reasons-circumstances-solo-parent'>
              <textarea rows='5' placeholder='Reasons/Circumstances of being a Solo Parent...' id='presentAddress' name='presentAddress' required className='mt-i'></textarea>
              </label>
              <label for='accept-terms'>
                <div className='radio-item'>
                  <input type='checkbox' name='terms' id='terms' value='Accepted'/>
                  <p>
                    I have read this form, understood its contents and consent to the processing of my personal data. 
                    I understand that my consent does not preclude the existence of other criteria for lawful 
                    processing of personal data, and does not waive any of my rights under the Data Privacy Act of 2012 
                    and other applicable laws.
                  </p>
                </div>
              </label>
              <button type='submit'>Save</button>
            </form>
          </details>
        </div>
      </div>
      <div className='right'>
        <div className='requirements'>
          <div className='title'>
            Requirements for Solo Parent ID Application
          </div>
          <div className='description'>
            <p>For NEW Application:</p>
            <ol>
              <li>Get application at the SSD office front desk and fill out</li>
              <li>Photocopy of Care Card or Voter’s ID/Verification (if available)</li>
              <li>Barangay Certificate</li>
              <li>Certificate of Employment (if employed)</li>
              <li>Photocopy of ITR or photocopy of 1 month pay slip (if employed)</li>
              <li>Certificate of Non-filing of Income Tax Return (not employed)</li>
              <li>Photocopy of Business Permit (for business owner)</li>
              <li>Affidavit of Being a Solo Parent (Legal Office - 3F Annex Bldg., City Hall)</li>
              <li>Photocopy of Birth Certificate of child/children, 22 years old and below</li>
              <li>Photocopy of PWD ID (for PWD Child/ren)</li>
              <li>Photocopy of Death Certificate (if widow/widower)</li>
              <li>Latest 1x1 picture</li>
            </ol>
          </div>
          <div className='description'>
            <p>For RENEWAL:</p>
            <ol>
              <li>Surrender old Solo Parent ID</li>
              <li>Get application form at the SSD office front desk and fill out</li>
              <li>Photocopy of Care Card or Voter’s ID/ Verification (if available)</li>
              <li>Barangay Certificate</li>
              <li>Photocopy of ITR or photocopy of 1 month pay slip (if employed)</li>
              <li>Affidavit of Non-filing ITR (if not employed)</li>
              <li>Photocopy of Business Permit (for business owner)</li>
              <li>Affidavit of Being a Solo Parent (Legal Office - 3F Annex Bldg., City Hall)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <img src={Wavy} alt='wavy' className='wavy'/>
    <div className='wavy-banner'>
      <h1>Login your account today</h1>
      <Link to='/login'>Take me there</Link>
    </div>
    <Footer/>
    </>
  );
}

export default Register;
