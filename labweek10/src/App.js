import {useState} from 'react';
import './App.css';

function App(){
    const[formData,setFormData]=useState({
        email:'',
        fullName:'',
        address:'',
        city:'',
        province:'',
        postalCode:''
    });
    const[submittedData,setSubmittedData]=useState(null);

    const handleChange = (event)=>{
        const{name, value}=event.target;
        setFormData((previous)=>({
            ...previous,
            [name]:value,
        }));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSubmittedData({...formData})
    };

    return (
        <main>
        <section>  
            <form onSubmit={handleSubmit}>
                <header>
                    <h1>Lab Week 10</h1>
                </header>

                <label htmlFor='fullName'>Full Name</label>
                <input
                id="fullName"
                name='fullName'
                type='text'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Jane Doe'
                required
                />

                <label htmlFor='email'>Email</label>
                <input
                id="email"
                name='email'
                type='text'
                value={formData.email}
                onChange={handleChange}
                placeholder='JaneDoe@georgebrown.ca'
                required
                />

                <label htmlFor='address'>Address</label>
                <input
                id="address"
                name='address'
                type='text'
                value={formData.address}
                onChange={handleChange}
                placeholder='120 Rock ave'
                required
                />

                <label htmlFor='city'>City</label>
                <input
                id="city"
                name='city'
                type='text'
                value={formData.city}
                onChange={handleChange}
                placeholder='Toronto'
                required
                />
                
                <label htmlFor='province'>Province</label>
                <input
                id="province"
                name='province'
                type='text'
                value={formData.province}
                onChange={handleChange}
                placeholder='Ontario'
                required
                />

                <label htmlFor='postalCode'>Postal Code</label>
                <input
                id="postalCode"
                name='postalCode'
                type='text'
                value={formData.postalCode}
                onChange={handleChange}
                placeholder='M6C 4X5'
                />

                <button type='submit' className='submit button'>
                    Submit
                </button>
            </form>
            </section>

        {submittedData && (
            <section className='summary' aria-live="polite">
                <h2>Submitted Information</h2>
                <d1>
                    <div>
                        <dt>Email: </dt>
                        <dd>{submittedData.email}</dd>
                    </div>
                    <div>
                        <dt>FullName: </dt>
                        <dd>{submittedData.fullName}</dd>
                    </div>
                    <div>
                        <dt>Address: </dt>
                        <dd>{submittedData.address}</dd>
                    </div>
                    <div>
                        <dt>City: </dt>
                        <dd>{submittedData.city}</dd>
                    </div>
                    <div>
                        <dt>Province: </dt>
                        <dd>{submittedData.province}</dd>
                    </div>
                    <div>
                        <dt>Postal Code: </dt>
                        <dd>{submittedData.postalCode}</dd>
                    </div>
                </d1>
            </section> 
        )}
        </main>
    );      
}

export default App;