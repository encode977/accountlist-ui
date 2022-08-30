import React from "react";
import notification from "../img/notification.png";
import search from "../img/search.png";

import dropbox from "../img/dropbox.png";
import more from "../img/more.png";

import { accounts } from "../handlers/accountData";

function Account() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-5 w-3/5">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 p-3 rounded-md border-2 border-gray">
                <img className="h-5" src={search} alt="" />
                <input
                  placeholder="Search account"
                  className="outline-none text-base"
                  type="text"
                />
              </div>
              <div className="flex items-center space-x-3">
                <img className="h-7" src={notification} alt="" />
                <div className="rounded-full h-14 w-14 bg-blue flex flex-col items-center justify-center">
                  <h2 className="text-xl text-center text-white font-medium">
                    LD
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Account</h2>
            <div className="space-y-5">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center justify-between px-4 py-4 bg-account border border-gray rounded-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-white rounded-full p-4">
                      <img className="h-5" src={account.icon} alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{account.title}</h3>
                      <p className="text-sm">{account.url}</p>
                    </div>
                  </div>

                  <h4 className="text-base font-semibold">
                    {account.no} accounts
                  </h4>
                  <div className="bg-white rounded-full flex flex-col items-center justify-center h-10 w-10">
                    <img src={more} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
