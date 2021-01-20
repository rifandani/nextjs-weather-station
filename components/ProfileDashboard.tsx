import { FaUserGraduate, FaSchool } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
// files

export default function ProfileDashboard() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-6 py-8 mx-auto">
        {/* Profile title */}
        <h3 className="text-3xl font-medium text-gray-700">My Profile</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            {/* Total Users */}
            <section className="w-full px-6">
              <div className="flex flex-col bg-white border-l-4 border-blue-500 rounded-md shadow-sm">
                <div className="flex px-5 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-md">
                  <p className="font-semibold text-blue-500">
                    Identitas Pribadi
                  </p>
                </div>

                <div className="flex items-center p-6">
                  <img src="/me.png" className="w-32 rounded-md" />

                  <div className="self-center ml-6">
                    <div className="flex items-center mb-3">
                      <FaUserGraduate className="w-5 h-5 text-blue-500" />

                      <p className="ml-3 text-gray-500">Tri Rizeki Rifandani</p>
                    </div>

                    <div className="flex items-center mb-3">
                      <IoMdSchool className="w-5 h-5 text-blue-500" />

                      <p className="ml-3 text-gray-500">
                        Pendidikan Teknik Mekatronika
                      </p>
                    </div>

                    <div className="flex items-center mb-3">
                      <FaSchool className="w-5 h-5 text-blue-500" />

                      <p className="ml-3 text-gray-500">
                        Universitas Negeri Yogyakarta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
