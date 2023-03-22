import React from 'react';
import classNames from 'classnames';

function ContentBox({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames('bg-[#111111] rounded-xl px-12 py-8', className)}>
      {children}
    </div>
  );
}

export default ContentBox;
