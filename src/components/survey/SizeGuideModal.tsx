import { Modal } from "@/components/system/Modal";
import { sizeGuide } from "@/data/purchase-turn-survey";

interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ open, onClose }: SizeGuideModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={sizeGuide.title}>
      <p className="text-asbor-text-muted mb-5 text-sm">{sizeGuide.notice}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-asbor-border text-asbor-gold-muted border-b">
              <th className="label-caps py-2 pr-4 font-medium">Talla</th>
              <th className="label-caps py-2 pr-4 font-medium">Cintura</th>
              <th className="label-caps py-2 font-medium">Cadera</th>
            </tr>
          </thead>
          <tbody>
            {sizeGuide.rows.map((row) => (
              <tr key={row.size} className="border-asbor-border/60 border-b">
                <td className="text-asbor-ivory py-2.5 pr-4">{row.size}</td>
                <td className="text-asbor-text-muted py-2.5 pr-4">{row.waist}</td>
                <td className="text-asbor-text-muted py-2.5">{row.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
