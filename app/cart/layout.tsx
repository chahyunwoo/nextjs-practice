interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div>
      <p>현대카드 무이자 이벤트 중</p>
      {children}
    </div>
  );
}
