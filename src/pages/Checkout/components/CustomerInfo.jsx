import { useState } from "react";
import { User } from "lucide-react";

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
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs">

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
          <label className="mb-1.5 block text-sm font-semibold text-stone-700">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
            placeholder="John Wick" type="text" 
            value={customerInfo.fullName} name="fullName"
            onChange={handleChange}
            required
            />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
            type="email" placeholder="john@example.com"
            value={customerInfo.email} name="email"
            onChange={handleChange}
            required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
              type="tel" placeholder="(555) 555-0100"
              value={customerInfo.phone} name="phone"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-stone-700">
            Address <span className="text-rose-500">*</span>
          </label>
          <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
            type="text" placeholder="123 Main Street, Apartment 4B"
            value={customerInfo.address} name="address"
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700">
              City <span className="text-rose-500">*</span>
            </label>
            <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
              type="text" placeholder="New York"
              value={customerInfo.city} name="city"
              onChange={handleChange}
              required
            />
          </div>
            {/* Postal code */}
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-stone-700">
              Postal Code <span className="text-rose-500">*</span>
            </label>
            <input className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-[#B88746] focus:ring-2 focus:ring-[#B88746]/20 transition"
              type="text" placeholder="11511"
              value={customerInfo.zipCode} name="zipCode"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
