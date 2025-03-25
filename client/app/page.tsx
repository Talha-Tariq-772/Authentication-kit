"use client";
import { useUserContext } from "@/context/userContext";
import { useState, useEffect } from "react";
import ChangePasswordForm from "./components/auth/ChangePasswordForm/ChangePasswordForm";

export default function Home() {
  const { logOutUser, user, handlerUserInput, userState, updateUser, emailVerification, loading, router, allUsers, deleteUser } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const { name = '', photo = '', isVerified = false, bio = '' } = user;
  const myToogle = () => setIsOpen(!isOpen);

  return (
    <main className="py-[2rem] mx-[10rem]">
      <header className="flex justify-between">
        <h1 className="text-[2rem] font-bold">
          Welcome <span className="text-red-600">{name}</span>
        </h1>
        <div className="flex items-center gap-4">
          <img src="https://i.pinimg.com/736x/b0/28/f1/b028f14a90c78fa60b56dcccf6ccec9f.jpg" alt="Not found"
            className="w-[40px] h-[40px] rounded-full" />

          {!isVerified && <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={emailVerification}>Verify Account</button>}
          <button
            onClick={logOutUser}
            className="px-4 py-2 bg-red-600 text-white rounded-md">
            Logout
          </button>
        </div>
      </header>

      <section>
        <p className="text-[#999] text-[2rem]">{bio}</p>
        <h1>
          <button onClick={myToogle}
            className="px-4 py-2 rounded-md text-white bg-[#2ECC71]">
            Update Bio
          </button>
        </h1>
        {isOpen && <form className="mt-4 max-w-[400px] w-full">
          <div className="flex flex-col">
            <label htmlFor="bio" className="mb-1 text-[#999]">
              Bio
            </label>
            <textarea
              name="bio"
              defaultValue={bio}
              onChange={(e) => handlerUserInput("bio")(e)}
              className="px-4 py-2 rounded-md border-[1.5px] text-gray-600 outline-[#2ECC71]"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => updateUser(e, { bio: userState.bio })}
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Update Bio
          </button>
        </form>}
      </section>

      <div className="flex gap-8">
        <div className="flex-1"><ChangePasswordForm /></div>
        
        {user?.role === 'admin' && (
          <div className="mx-8 px-6 py-8 rounded-xl bg-white w-full max-w-screen-xl
            shadow-lg hover:shadow-[0_0_25px_rgba(114,99,243,0.2)]
            transition-all duration-300 border border-gray-200">
            
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8 px-2">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <svg className="w-6 h-6 text-[#2ECC71] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                All Users
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-gray-100 px-6 py-4 font-semibold text-gray-700 uppercase text-sm">
                <div className="col-span-4 flex items-center">
                  <span>User</span>
                </div>
                <div className="col-span-5 flex items-center">
                  <span>Email</span>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <span>Role</span>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <span>Action</span>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {allUsers.length > 0 ? (
                  allUsers.map((user: any) => (
                    <div
                      key={user._id}
                      className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-150 items-center"
                    >
                      {/* User Column */}
                      <div className="col-span-4 flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-[#2ECC71]">
                          <img
                            src={user.photo || '/default-avatar.png'}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 truncate max-w-[180px]">{user.name}</p>
                          <p className="text-xs text-gray-500">ID: {user._id.substring(0, 6)}...</p>
                        </div>
                      </div>

                      {/* Email Column */}
                      <div className="col-span-5 flex items-center">
                        <div className="text-sm text-gray-900 truncate" title={user.email}>
                          {user.email}
                        </div>
                      </div>

                      {/* Role Column */}
                      <div className="col-span-2 flex items-center justify-center">
                        <span className={`
                          px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${user.role === 'admin' ? 'bg-[#2ECC71]/20 text-[#2ECC71]' : 
                            user.role === 'moderator' ? 'bg-blue-100 text-blue-800' : 
                            'bg-gray-100 text-gray-800'}
                        `}>
                          {user.role}
                        </span>
                      </div>

                      {/* Action Column */}
                      <div className="col-span-1 flex items-center justify-end">
                        <button
                          onClick={() => deleteUser(user._id)}
                          className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-lg 
                                    transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-4 text-center text-gray-500">
                    {loading ? 'Loading users...' : 'No users found'}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}