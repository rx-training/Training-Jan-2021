using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Room
    {
        [Key]
        public int RoomId { get; set; }
        public string RoomNo { get; set; }
        public int HotelId { get; set; }
        public bool RoomStatus { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }

        public virtual Hotel Hotel { get; set; }
    }
}
