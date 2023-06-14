type Props = {
  className?: string;
  size?: number;
};

const BackupManagementIcon = ({ className, size = 16 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.76172 11.6381C5.81417 11.7469 5.86071 11.8597 5.90078 11.9761L6.61964 12.2155V13.7165L5.90078 13.9562C5.86083 14.0726 5.8144 14.1855 5.76172 14.2942L6.06295 14.8972H11.5853V11.0352H6.06295L5.76172 11.6381Z"
        fill="currentColor"
      />
      <path
        d="M13.793 14.3447H15.9999V11.5859H13.793V14.3447ZM14.8964 12.1377H15.4481V12.6894H14.8964V12.1377ZM14.8964 13.2412H15.4481V13.7929H14.8964V13.2412Z"
        fill="currentColor"
      />
      <path
        d="M12.1367 11.0352H13.2402V14.8972H12.1367V11.0352Z"
        fill="currentColor"
      />
      <path
        d="M5.41658 13.6616L5.45687 13.5229L6.06905 13.319V12.613L5.45687 12.4091L5.41658 12.2704C5.36502 12.0938 5.29604 11.9264 5.21167 11.7725L5.14213 11.6458L5.42985 11.0696L4.93085 10.5706L4.35484 10.8585L4.22817 10.7888C4.07448 10.7041 3.90708 10.6351 3.73051 10.5839L3.59178 10.5436L3.38731 9.93164H2.68174L2.47761 10.5438L2.33888 10.5841C2.16232 10.6357 1.99491 10.7046 1.84122 10.789L1.71454 10.8588L1.13854 10.5708L0.639538 11.0698L0.927254 11.6461L0.857722 11.7727C0.773013 11.9266 0.704039 12.0942 0.65281 12.2706L0.612518 12.4094L0 12.6134V13.3193L0.612175 13.5232L0.652467 13.6619C0.70403 13.8385 0.773005 14.0059 0.85738 14.1598L0.926911 14.2865L0.639195 14.8627L1.1382 15.3617L1.7142 15.0738L1.8411 15.1435C1.99501 15.2283 2.16253 15.2972 2.33876 15.3485L2.47749 15.3887L2.68173 16.0007H3.38765L3.59156 15.3885L3.73029 15.3482C3.90685 15.2967 4.07426 15.2277 4.22795 15.1433L4.35484 15.0736L4.93085 15.3615L5.42985 14.8625L5.14213 14.2863L5.21167 14.1596C5.29604 14.0059 5.36502 13.8382 5.41658 13.6616ZM3.03454 14.6213C2.12036 14.6213 1.37938 13.8803 1.37938 12.9662C1.37938 12.052 2.12036 11.311 3.03454 11.311C3.94871 11.311 4.68969 12.052 4.68969 12.9662C4.68969 13.8803 3.94871 14.6213 3.03454 14.6213Z"
        fill="currentColor"
      />
      <path
        d="M3.58775 12.9658C3.58775 13.2704 3.34077 13.5174 3.03606 13.5174C2.73138 13.5174 2.48438 13.2705 2.48438 12.9658C2.48438 12.6611 2.73136 12.4141 3.03606 12.4141C3.34075 12.4141 3.58775 12.6611 3.58775 12.9658Z"
        fill="currentColor"
      />
      <path
        d="M12.6895 1.6551V3.86202H11.0344V1.6551H7.72405V3.86202H6.06889V0H0V8.27605H6.06889V4.41403H7.72405V6.62095H11.0344V4.41403H12.6895V6.62095H15.9998V1.65521L12.6895 1.6551ZM0.827434 0.827519H2.48259V3.03445H0.827434V0.827519ZM3.31025 7.72413H0.551518V7.17244H3.31013L3.31025 7.72413ZM3.31025 6.62067H0.551518V6.06898H3.31013L3.31025 6.62067ZM5.24129 7.44836H4.13783V6.3449H5.24129V7.44836ZM5.51707 5.5172H0.551612V4.96552H5.51707V5.5172ZM5.51707 4.41386H0.551612V3.86217H5.51707V4.41386ZM5.51707 3.31039H3.31014V2.7587H5.51707V3.31039ZM5.51707 2.20693H3.31014L3.31025 1.65515H5.51718L5.51707 2.20693ZM5.51707 1.10346H3.31014L3.31025 0.551689H5.51718L5.51707 1.10346ZM10.4828 6.06892H8.27589V5.51723H10.4828V6.06892ZM10.4828 4.96546H8.27589V4.41377H10.4828V4.96546ZM10.4828 3.86199H8.27589V3.31031H10.4828V3.86199ZM10.4828 2.75853H8.27589V2.20684H10.4828V2.75853ZM15.4483 6.06884H13.2413V5.51715H15.4483V6.06884ZM15.4483 4.96537H13.2413V4.41368H15.4483V4.96537ZM15.4483 3.86191H13.2413V3.31022H15.4483V3.86191ZM15.4483 2.75845H13.2413V2.20676H15.4483V2.75845Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BackupManagementIcon;