import { useState } from "react";
import { User } from "lucide-react";

const inputStyle = "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition"

function CustomerInfo() {
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  })

  function handleChange(e){
    setCustomerInfo(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
          <User size={18} className="text-stone-600" />
        </div>
        <div>
          <h2 className="text-base font-bold text-stone-900">Customer Information</h2>
          <p className="text-xs text-stone-400">Please enter your details to continue</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-stone-700"
          htmlFor="fullName">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input className={inputStyle} 
            id="fullName"
            placeholder="John Wick" type="text" 
            value={customerInfo.fullName} name="fullName"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700"
            htmlFor="email">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input className={inputStyle}
            id="email"
            type="email" placeholder="john@example.com"
            value={customerInfo.email} name="email"
            onChange={handleChange}
            required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700"
            htmlFor="phone">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input className={inputStyle}
            id="phone"
              type="tel" placeholder="(555) 555-0100"
              value={customerInfo.phone} name="phone"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-stone-700"
          htmlFor="address">
            Address <span className="text-rose-500">*</span>
          </label>
          <input className={inputStyle}
            id="address"
            type="text" placeholder="123 Main Street, Apartment 4B"
            value={customerInfo.address} name="address"
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700"
            htmlFor="city">
              City <span className="text-rose-500">*</span>
            </label>
            <input className={inputStyle}
            id="city"
              type="text" placeholder="New York"
              value={customerInfo.city} name="city"
              onChange={handleChange}
              required
            />
          </div>
            {/* Postal code */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700"
            htmlFor="zipCode">
              Postal Code <span className="text-rose-500">*</span>
            </label>
            <input className={inputStyle}
            id="zipCode"
              type="text" placeholder="11511"
              value={customerInfo.zipCode} name="zipCode"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerInfo;
