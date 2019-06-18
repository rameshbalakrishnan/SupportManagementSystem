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
        //SupportengineerRequestlist
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
       //UserList
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
    }
}

