using System;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using DAL.Interfaces;
using DAL.Model;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver.Linq;
using MongoDB.Driver;
using API.Service.Infrastructure;
using System.Security.Cryptography;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Web;

namespace API.Service.Controllers
{
    [Route("api/[controller]")]
    public class RequestController : Controller
    {
        private readonly ICommonRepo<Request> _accountRepository;

        public RequestController(ICommonRepo<Request> accountRepository)
        {
            _accountRepository = accountRepository;
        }
        //Get All //adminlist
        [HttpGet]
        [Route("requestgetall")]
        public ResponseEntity<Request> Get()
        {
            try
            {
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = _accountRepository.FindAll().ToList()};
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during fetching records!", Entity = null, EnityList = null };
            }

        }
        //Only SupportengineerRequestlist
        [HttpGet]
        [Route("supportengineergetall")]
        public ResponseEntity<Request> SupportEngineerGetAll()
        {
            try
            {
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = _accountRepository.FindAll().Where(x=>x.RequestAssignedUserId == 3).ToList()};
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during fetching records!", Entity = null, EnityList = null };
            }

        }
       //Only UserList
        [HttpGet]
        [Route("usergetall")]
        public ResponseEntity<Request> UserGetAll()
        {
            try
            {
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = _accountRepository.FindAll().Where(x=>x.RequestUserId == 2).ToList()};
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during fetching records!", Entity = null, EnityList = null };
            }
        }
         //Request Get Id
        [HttpGet]
        [Route("requestgetid")]
        public ResponseEntity<Request> GetbyID(string _id)
        {
            try
            {
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = _accountRepository.FindByCondition(x => x._id == _id) };
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during fetching records!", Entity = null, EnityList = null };
            }
        }
         //Insertion
        [HttpPost]
        [Route("requestadd")]
        public ResponseEntity<Request> Add([FromBody]Request requestdata)
        {
            try
            {
                requestdata.RequestUserId = 10;
                requestdata.RequestDate = DateTime.Now;
                requestdata.RequestAssignedUserId = 3;
                requestdata.RequestStatus = "inprogress";
                _accountRepository.Create(requestdata);
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = null };
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during Inserting records!", Entity = null, EnityList = null };
            }
        }
         [HttpPost]
         [Route("RequestGetbyID")]
        public ResponseEntity<Request> GetbyUniqueID([FromBody]Request requestdata)
        {
            try
            {
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = _accountRepository.FindByCondition(x => x._id == requestdata._id) };
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during fetching records!", Entity = null, EnityList = null };
            }
        }
        //Updation
        [HttpPut]
        [Route("requestupdate")]
        public ResponseEntity<Request> Update([FromBody]Request requestdata)
        {
            try
            {
                var update = Builders<Request>.Update
             .Set(it => it.RequestPriority,requestdata.RequestPriority).
             Set(it => it.RequestShortDescription,requestdata.RequestShortDescription)
             .Set(it => it.RequestModule,requestdata.RequestModule)
             .Set(it => it.RequestDescription,requestdata.RequestDescription);
                _accountRepository.Update(x => x._id == requestdata._id, update);
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = null };
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during Updating records!", Entity = null, EnityList = null };
            }
        }
          //Deletion
        [HttpPost]
        [Route("requestdelete")]
        public ResponseEntity<Request> Delete([FromBody] Request requestdata)
        {
            try
            {

                _accountRepository.Delete(x => x._id ==requestdata._id);
                return new ResponseEntity<Request> { Responsecode = 1, ResponseMessage = "Success!", Entity = null, EnityList = null };
            }
            catch (Exception)
            {
                return new ResponseEntity<Request> { Responsecode = 0, ResponseMessage = "Error during Deleting records!", Entity = null, EnityList = null };
            }

        }
    }
}

