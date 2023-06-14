import Toggle from "@/components/shared/Toggle";
import { MdDownloadForOffline } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import Dropdown from "@/components/shared/Dropdown";
import { FiChevronDown } from "react-icons/fi";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div className="h-20 text-white flex items-center px-6">
      <div className="">
        <p className="font-medium text-lg">Dashboard</p>
        <p className="text-xs">Home</p>
      </div>
      <div className="flex gap-6 ml-auto">
        <select
          placeholder=""
          className="bg-dark-700 text-xs rounded border-none focus:ring-0 focus:outline-none w-48 py-3 px-4"
        >
          <option value="0">Select Network</option>
          <option value="1">Network1</option>
          <option value="2">Network2</option>
        </select>
        <select
          placeholder=""
          className="bg-dark-700 text-xs rounded border-none focus:ring-0 focus:outline-none w-48 py-3 px-4"
        >
          <option value="0">Select Host</option>
          <option value="1">Host1</option>
          <option value="2">Host2</option>
        </select>

        <div className="flex items-center gap-2">
          <label htmlFor="toggle-theme" className="text-xs">
            Light
          </label>
          <Toggle
            inputProps={{
              id: "toggle-theme",
            }}
            size="sm"
            color="primary"
            checked={true}
          />
          <label htmlFor="toggle-theme" className="text-xs">
            Dark
          </label>
        </div>

        <div className="flex items-center gap-3">
          <Dropdown>
            <Dropdown.Trigger>
              <button className="h-10 w-10 flex items-center justify-center text-white bg-slate-700 rounded hover:bg-primary-500 transition-colors duration-150">
                <MdDownloadForOffline size={20} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content>No content</Dropdown.Content>
          </Dropdown>

          <Dropdown>
            <Dropdown.Trigger>
              <button className="h-10 w-10 flex items-center justify-center text-white bg-slate-700 rounded hover:bg-primary-500 transition-colors duration-150">
                <BsFillBellFill size={18} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content>No content</Dropdown.Content>
          </Dropdown>

          <Dropdown>
            <Dropdown.Trigger className="h-10 px-2 flex items-center justify-center text-white bg-slate-700 rounded hover:bg-primary-500 transition-colors duration-150">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="rounded-full h-7 w-7"
              />
              <span className="text-xs ms-2">Easton Cox</span>
              <FiChevronDown className="ms-4 text-slate-400" size={16} />
            </Dropdown.Trigger>
            <Dropdown.Content>No content</Dropdown.Content>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
