import { Button } from '@components/shadeCnUI/Button';

export default function ButtonDemo() {
  return (
    <div className="w-100 h-100 flex justify-center items-center">
      <Button
        className="bg-white border-1 hover:bg-slate-300 text-black"
        variant={'outline'}
        size={'sm'}
      >
        Button
      </Button>
    </div>
  );
}
