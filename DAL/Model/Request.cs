using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DAL.Model
{
    public class Request
    {
        [BsonId]
        // standard BSonId generated by MongoDb
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public Int64 RequestUserId { get; set; }
        public DateTime RequestDate { get; set; }
        public int RequestPriority { get; set; }
        public string RequestShortDescription { get; set; }
        public string RequestStatus { get; set; }
        public string RequestModule { get; set; }
        public string RequestDescription { get; set; }
        public int RequestAssignedUserId { get; set; }
    }
}
