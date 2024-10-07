import type { ReactNode } from 'react';
import { useState } from 'react';
import '@learnbit/styling.config.tailwind/globals.tailwind.css';
import { TrainSearch } from '@nore-work/train.train-search';
export type HomeRootProps = {
  /**
   * sets the component children.
   */
  deps?: {
    train: any;
  };
};

// Header Component
const Header = () => (
  <div className="bg-blue-600 text-white p-4 rounded-b-3xl">
    <h1 className="text-2xl font-bold mb-2">广交会参展指南</h1>
    <div className="flex justify-between items-center">
      <p className="text-sm">高星酒店推荐 | 交通攻略</p>
      <button
        onClick={() => alert('预订功能已触发')}
        className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
      >
        立即预订 GO
      </button>
    </div>
  </div>
);

// Notification Component
const Notification = () => (
  <div className="bg-yellow-100 mx-4 my-2 p-2 rounded-lg flex items-center text-sm">
    <i className="fas fa-info-circle text-yellow-500 mr-2"></i>
    <p className="flex-grow">预订提醒：为了提升Trip.com用户体验，提供更优...</p>
    <i className="fas fa-chevron-right text-gray-400"></i>
  </div>
);

// Tab Component
const Tab = ({ activeTab, setActiveTab }) => (
  <div className="flex border-b">
    {['机票', '火车'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 py-2 px-4 ${
          activeTab === tab
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

// TravelTypeSelector Component
const TravelTypeSelector = ({ travelType, setTravelType }) => (
  <div className="flex justify-between mb-4">
    {['因公出行', '因私出行'].map((type) => (
      <button
        key={type}
        onClick={() => setTravelType(type)}
        className={`px-4 py-1 rounded-full text-sm ${
          travelType === type
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-400 border border-gray-300'
        }`}
      >
        {type}
      </button>
    ))}
  </div>
);

// TripTypeSelector Component
const TripTypeSelector = ({ tripType, setTripType }) => (
  <div className="flex justify-between mb-4">
    {['单程', '往返', '多程'].map((type) => (
      <button
        key={type}
        onClick={() => setTripType(type)}
        className={`text-gray-700 font-medium ${
          tripType === type ? 'border-b-2 border-blue-600 text-blue-600' : ''
        }`}
      >
        {type}
      </button>
    ))}
  </div>
);

// TravelForm Component
const TravelForm = ({ travelType, tripType, setTravelType, setTripType }) => (
  <div className="p-4">
    <TravelTypeSelector travelType={travelType} setTravelType={setTravelType} />
    <TripTypeSelector tripType={tripType} setTripType={setTripType} />
    <div className="flex justify-between items-center mb-4">
      <span className="text-2xl font-bold">上海</span>
      <i className="fas fa-exchange-alt text-blue-600 transform rotate-90"></i>
      <span className="text-2xl font-bold">北京</span>
    </div>
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-lg">10月06日 今天</p>
        <p className="text-sm text-gray-500">不限舱位</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">1成人</p>
      </div>
    </div>
    <button
      onClick={() => alert('搜索功能已触发')}
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
    >
      {travelType}
    </button>
    <div className="flex justify-between mt-4 text-sm text-blue-600">
      <span onClick={() => alert('差标功能已触发')} className="cursor-pointer">
        差标{' '}
      </span>
      <span
        onClick={() => alert('在线选座功能已触发')}
        className="cursor-pointer"
      >
        在线选座{' '}
      </span>
      <span
        onClick={() => alert('航班动态功能已触发')}
        className="cursor-pointer"
      >
        航班动态
      </span>
    </div>
  </div>
);

// QuickAccess Component
const QuickAccess = () => {
  const items = [
    { icon: 'fa-plane', text: '机票', color: 'text-blue-600' },
    { icon: 'fa-hotel', text: '酒店', color: 'text-orange-500' },
    { icon: 'fa-train', text: '火车', color: 'text-green-600' },
    { icon: 'fa-car', text: '国内打车', color: 'text-teal-500' },
    { icon: 'fa-taxi', text: '境外打车', color: 'text-teal-500' },
    { icon: 'fa-shuttle-van', text: '接送机', color: 'text-teal-500' },
    { icon: 'fa-car-side', text: '用车', color: 'text-teal-500' },
    { icon: 'fa-th', text: '更多', color: 'text-gray-500' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 m-4 text-center">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => alert(`${item.text}功能已触发`)}
          className="cursor-pointer"
        >
          <i className={`fas ${item.icon} ${item.color} text-2xl mb-1`}></i>
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

// Promotion Component
const Promotion = () => (
  <div className="bg-blue-100 mx-4 rounded-lg p-4 mb-4">
    <div className="flex items-center mb-2">
      <img
        src="https://placehold.co/30x30"
        alt="Lufthansa logo"
        className="mr-2 rounded"
      />
      <span className="text-sm text-gray-600">携程商旅 | Lufthansa</span>
    </div>
    <h2 className="text-xl font-bold mb-2">乘汉莎航空</h2>
    <h2 className="text-xl font-bold mb-2">飞遍慕尼黑</h2>
    <div className="flex items-center">
      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mr-2">
        100元
      </span>
      <span className="text-sm text-gray-600">优惠券</span>
    </div>
  </div>
);

// BottomNavigation Component
const BottomNavigation = () => {
  const navItems = [
    { icon: 'fa-home', text: '首页', active: true },
    { icon: 'fa-suitcase', text: '行程' },
    { icon: 'fa-envelope', text: '消息' },
    { icon: 'fa-user', text: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => alert(`${item.text}功能已触发`)}
          className={`text-center cursor-pointer ${
            item.active ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <i className={`fas ${item.icon} text-xl`}></i>
          <p className="text-xs">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

// Main App Component
export const HomeRoot = (props: HomeRootProps) => {
  const { deps } = props;
  const [activeTab, setActiveTab] = useState('机票');
  const [travelType, setTravelType] = useState('因公出行');
  const [tripType, setTripType] = useState('往返');
  const { train } = deps;
  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <Header />
      <Notification />
      <div className="bg-white mx-4 rounded-lg shadow">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <TravelForm
          travelType={travelType}
          tripType={tripType}
          setTravelType={setTravelType}
          setTripType={setTripType}
        /> */}
        <TrainSearch
          onSearch={(data) => {
            train?.goToList?.(data)
          }}
        />
      </div>
      <QuickAccess />
      <Promotion />
      <BottomNavigation />
    </div>
  );
};
